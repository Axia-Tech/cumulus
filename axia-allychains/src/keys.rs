use betanet_allychain_runtime::{AccountId, AuraId, Signature};
use hex_literal::hex;
use sp_core::crypto::UncheckedInto;

pub fn endowed_accounts() -> Vec<AccountId> {
    vec![
        hex!["c2312f7f9a8190bf76db9dc40e5ef351c4c23e3ae6540932bf2c2d485289c37b"].into(), // Rakhi//stash
        hex!["688d6fa54d9ace0fa07492f3d8dfef78594130719e61c213d700c62421177c38"].into()  // Priya//stash
    ]
}

pub fn initial_authorities() -> Vec<AuraId> {
    vec![
        hex!["3233f745d0860ed64ae9c7f4ea5c0773316fc9265199f312d3f6e8ce08255c10"].unchecked_into(), // Sankar//stash
        hex!["445f574d57f768ea7e1a2f551bef4298ace99d8895d316352cfc02aececcf26c"].unchecked_into(), // Arun//stash
	]
}

