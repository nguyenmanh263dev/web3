export const loadContract = async (name, provider) => {
  const contract = require("@truffle/contract");

  const res = await fetch(`/contracts/${name}.json`);
  const Artifact = await res.json();
  const _contract = contract(Artifact);
  _contract.setProvider(provider);
  console.log(3333, _contract);

  const deployedContract = await _contract.deployed();

  return deployedContract;
};
