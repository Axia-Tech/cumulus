(function() {var implementors = {};
implementors["pallet_asset_tx_payment"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt; SignedExtension for <a class=\"struct\" href=\"pallet_asset_tx_payment/struct.ChargeAssetTxPayment.html\" title=\"struct pallet_asset_tx_payment::ChargeAssetTxPayment\">ChargeAssetTxPayment</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Call: Dispatchable&lt;Info = DispatchInfo, PostInfo = PostDispatchInfo&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.Fungibles\" title=\"type pallet_asset_tx_payment::pallet::Config::Fungibles\">Fungibles</a> as Inspect&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + FixedPointOperand,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::OnChargeTransaction as OnChargeTransaction&lt;T&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u64.html\">u64</a>&gt; + FixedPointOperand + IsType&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.Balance\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::Balance\">Balance</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.AssetId\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::AssetId\">AssetId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CreditOf&lt;T::AccountId, T::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.Fungibles\" title=\"type pallet_asset_tx_payment::pallet::Config::Fungibles\">Fungibles</a>&gt;: IsType&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.LiquidityInfo\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::LiquidityInfo\">LiquidityInfo</a>&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_asset_tx_payment::ChargeAssetTxPayment"]}];
implementors["shell_runtime"] = [{"text":"impl SignedExtension for <a class=\"struct\" href=\"shell_runtime/struct.DisallowSigned.html\" title=\"struct shell_runtime::DisallowSigned\">DisallowSigned</a>","synthetic":false,"types":["shell_runtime::DisallowSigned"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()