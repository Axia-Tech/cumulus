// Copyright 2021 Axia Technologies (UK) Ltd.
// This file is part of Cumulus.

// Cumulus is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Cumulus is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Cumulus.  If not, see <http://www.gnu.org/licenses/>.

//! Autogenerated weights for `pallet_multisig`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE AXLIB BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2022-02-02, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("westmint-dev"), DB CACHE: 1024

// Executed Command:
// ./target/release/axia-collator
// benchmark
// --chain=westmint-dev
// --execution=wasm
// --wasm-execution=compiled
// --pallet=pallet_multisig
// --extrinsic=*
// --steps=50
// --repeat=20
// --raw
// --header=./file_header.txt
// --output=./axia-allychains/westmint/src/weights

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::Weight};
use sp_std::marker::PhantomData;

/// Weight functions for `pallet_multisig`.
pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> pallet_multisig::WeightInfo for WeightInfo<T> {
	fn as_multi_threshold_1(z: u32, ) -> Weight {
		(17_312_000 as Weight)
			// Standard Error: 0
			.saturating_add((1_000 as Weight).saturating_mul(z as Weight))
	}
	// Storage: Multisig Multisigs (r:1 w:1)
	// Storage: unknown [0x3a65787472696e7369635f696e646578] (r:1 w:0)
	fn as_multi_create(s: u32, z: u32, ) -> Weight {
		(39_212_000 as Weight)
			// Standard Error: 1_000
			.saturating_add((131_000 as Weight).saturating_mul(s as Weight))
			// Standard Error: 0
			.saturating_add((1_000 as Weight).saturating_mul(z as Weight))
			.saturating_add(T::DbWeight::get().reads(2 as Weight))
			.saturating_add(T::DbWeight::get().writes(1 as Weight))
	}
	// Storage: Multisig Multisigs (r:1 w:1)
	// Storage: Multisig Calls (r:1 w:1)
	// Storage: unknown [0x3a65787472696e7369635f696e646578] (r:1 w:0)
	fn as_multi_create_store(s: u32, z: u32, ) -> Weight {
		(44_813_000 as Weight)
			// Standard Error: 1_000
			.saturating_add((125_000 as Weight).saturating_mul(s as Weight))
			// Standard Error: 0
			.saturating_add((2_000 as Weight).saturating_mul(z as Weight))
			.saturating_add(T::DbWeight::get().reads(3 as Weight))
			.saturating_add(T::DbWeight::get().writes(2 as Weight))
	}
	// Storage: Multisig Multisigs (r:1 w:1)
	fn as_multi_approve(s: u32, z: u32, ) -> Weight {
		(26_141_000 as Weight)
			// Standard Error: 1_000
			.saturating_add((121_000 as Weight).saturating_mul(s as Weight))
			// Standard Error: 0
			.saturating_add((1_000 as Weight).saturating_mul(z as Weight))
			.saturating_add(T::DbWeight::get().reads(1 as Weight))
			.saturating_add(T::DbWeight::get().writes(1 as Weight))
	}
	// Storage: Multisig Multisigs (r:1 w:1)
	// Storage: Multisig Calls (r:1 w:1)
	fn as_multi_approve_store(s: u32, z: u32, ) -> Weight {
		(41_959_000 as Weight)
			// Standard Error: 1_000
			.saturating_add((130_000 as Weight).saturating_mul(s as Weight))
			// Standard Error: 0
			.saturating_add((2_000 as Weight).saturating_mul(z as Weight))
			.saturating_add(T::DbWeight::get().reads(2 as Weight))
			.saturating_add(T::DbWeight::get().writes(2 as Weight))
	}
	// Storage: Multisig Multisigs (r:1 w:1)
	// Storage: Multisig Calls (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	fn as_multi_complete(s: u32, z: u32, ) -> Weight {
		(50_028_000 as Weight)
			// Standard Error: 1_000
			.saturating_add((218_000 as Weight).saturating_mul(s as Weight))
			// Standard Error: 0
			.saturating_add((2_000 as Weight).saturating_mul(z as Weight))
			.saturating_add(T::DbWeight::get().reads(3 as Weight))
			.saturating_add(T::DbWeight::get().writes(3 as Weight))
	}
	// Storage: Multisig Multisigs (r:1 w:1)
	// Storage: unknown [0x3a65787472696e7369635f696e646578] (r:1 w:0)
	fn approve_as_multi_create(s: u32, ) -> Weight {
		(37_062_000 as Weight)
			// Standard Error: 1_000
			.saturating_add((148_000 as Weight).saturating_mul(s as Weight))
			.saturating_add(T::DbWeight::get().reads(2 as Weight))
			.saturating_add(T::DbWeight::get().writes(1 as Weight))
	}
	// Storage: Multisig Multisigs (r:1 w:1)
	// Storage: Multisig Calls (r:1 w:0)
	fn approve_as_multi_approve(s: u32, ) -> Weight {
		(23_541_000 as Weight)
			// Standard Error: 0
			.saturating_add((140_000 as Weight).saturating_mul(s as Weight))
			.saturating_add(T::DbWeight::get().reads(1 as Weight))
			.saturating_add(T::DbWeight::get().writes(1 as Weight))
	}
	// Storage: Multisig Multisigs (r:1 w:1)
	// Storage: Multisig Calls (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	fn approve_as_multi_complete(s: u32, ) -> Weight {
		(68_887_000 as Weight)
			// Standard Error: 1_000
			.saturating_add((231_000 as Weight).saturating_mul(s as Weight))
			.saturating_add(T::DbWeight::get().reads(3 as Weight))
			.saturating_add(T::DbWeight::get().writes(3 as Weight))
	}
	// Storage: Multisig Multisigs (r:1 w:1)
	// Storage: Multisig Calls (r:1 w:1)
	fn cancel_as_multi(s: u32, ) -> Weight {
		(56_570_000 as Weight)
			// Standard Error: 1_000
			.saturating_add((148_000 as Weight).saturating_mul(s as Weight))
			.saturating_add(T::DbWeight::get().reads(2 as Weight))
			.saturating_add(T::DbWeight::get().writes(2 as Weight))
	}
}
