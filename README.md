# Sedra Transaction Report

Generates a CSV file for all your Sedra transactions.

Currently in alpha - no expected SLA.

## Want to just get to generating your report?

No public version running yet (of my knowlage)

## Requirement

- NodeJS (v16+)

## Usage

1. Download this repository and unzip (or clone it if you know how)
2. Open a terminal/cmd and go to the directory you downloaded this at, then run `npm install`. This will install dependencies.
3. Create a file `addresses.txt` in this directory. In this file, you will list all your address - one per line
```
sedra:myaddress
sedra:myotheraddress
sedra:anotherone
```
4. To generate your transaction report run `npm run generate`

This will generate the file `sedra-transactions.csv`. This CSV is currently compatible with Koinly only.

## Notes
- Compound transactions and transactions sending to yourself are ignored
- Assumes addresses from exchanges are treated as not your own
- If you notice the report is inaccurate, first make sure you actually listed all addresses you care about in `addresses.txt`

## Found this useful?

Consider donating to the original author in Kaspa: `kaspa:qq6rz6q40e4t8sft4wsphwwlqm39pzc7ehwsprepe3d5szhkanuagfwd7lxrv`
Donations for the creation of this fork (highly suggest donate to original author instead) `sedra:qps5e0qsck8rcvm2a0gl7zp9z9m279jdjng53pvr7eauzu4gvtsfwuxn4yrxe`
