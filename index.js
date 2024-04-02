const fs = require('fs');
const readline = require('readline');

const {validateAddress} = require('./src/utils');
const {generateReport} = require('./src/report');

function writeToFile(txs, outputFile) {
    const writer = fs.createWriteStream(outputFile);

    writer.write('"Date","Sent Amount","Sent Currency","Received Amount","Received Currency","Fee Amount","Fee Currency","TxHash"\n');

    let prev = null;

    txs.forEach((tx) => {
        if (prev && prev.txHash == tx.txHash) {
            return;
        }

        if (!tx.compound && !tx.sendToSelf) {
            writer.write(`"${tx.timestamp}","${tx.sendAmount || ''}","${tx.sendAmount ? 'SDR' : ''}","${tx.receiveAmount || ''}","${tx.receiveAmount ? 'SDR' : ''}","${tx.sendAmount ? tx.feeAmount : ''}","${tx.sendAmount ? 'SDR' : ''}","${tx.txHash}"\n`);
        }

        prev = tx;
    });

    writer.end();
}

async function parseAddresses() {
    const addresses = [];

    const readStream = fs.createReadStream('./addresses.txt');

    const readLineInterface = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity,
    });
    
    for await (const address of readLineInterface) {
        if (validateAddress(address)) {
            addresses.push(address);
        }
    }

    return addresses;
}

if (require.main === module) {
    parseAddresses()
        .then(generateReport)
        .then((processedTxs) => writeToFile(processedTxs, 'sedra-transactions.csv'));
}
