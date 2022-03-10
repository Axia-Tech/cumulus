(function() {var implementors = {};
implementors["allychain_template_runtime"] = [{"text":"impl TransactionPaymentApi&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, UncheckedExtrinsic&lt;<a class=\"enum\" href=\"allychain_template_runtime/enum.MultiAddress.html\" title=\"enum allychain_template_runtime::MultiAddress\">MultiAddress</a>&lt;&lt;&lt;MultiSignature as Verify&gt;::Signer as IdentifyAccount&gt;::AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.unit.html\">()</a>&gt;, <a class=\"enum\" href=\"allychain_template_runtime/enum.Call.html\" title=\"enum allychain_template_runtime::Call\">Call</a>, MultiSignature, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">(</a>CheckSpecVersion&lt;<a class=\"struct\" href=\"allychain_template_runtime/struct.Runtime.html\" title=\"struct allychain_template_runtime::Runtime\">Runtime</a>&gt;, CheckTxVersion&lt;<a class=\"struct\" href=\"allychain_template_runtime/struct.Runtime.html\" title=\"struct allychain_template_runtime::Runtime\">Runtime</a>&gt;, CheckGenesis&lt;<a class=\"struct\" href=\"allychain_template_runtime/struct.Runtime.html\" title=\"struct allychain_template_runtime::Runtime\">Runtime</a>&gt;, CheckMortality&lt;<a class=\"struct\" href=\"allychain_template_runtime/struct.Runtime.html\" title=\"struct allychain_template_runtime::Runtime\">Runtime</a>&gt;, CheckNonce&lt;<a class=\"struct\" href=\"allychain_template_runtime/struct.Runtime.html\" title=\"struct allychain_template_runtime::Runtime\">Runtime</a>&gt;, CheckWeight&lt;<a class=\"struct\" href=\"allychain_template_runtime/struct.Runtime.html\" title=\"struct allychain_template_runtime::Runtime\">Runtime</a>&gt;, ChargeTransactionPayment&lt;<a class=\"struct\" href=\"allychain_template_runtime/struct.Runtime.html\" title=\"struct allychain_template_runtime::Runtime\">Runtime</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">)</a>&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u128.html\">u128</a>&gt; for <a class=\"struct\" href=\"allychain_template_runtime/struct.Runtime.html\" title=\"struct allychain_template_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["allychain_template_runtime::Runtime"]}];
implementors["betanet_runtime"] = [{"text":"impl TransactionPaymentApi&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, UncheckedExtrinsic&lt;MultiAddress&lt;&lt;&lt;MultiSignature as Verify&gt;::Signer as IdentifyAccount&gt;::AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.unit.html\">()</a>&gt;, <a class=\"enum\" href=\"betanet_runtime/enum.Call.html\" title=\"enum betanet_runtime::Call\">Call</a>, MultiSignature, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">(</a>CheckSpecVersion&lt;<a class=\"struct\" href=\"betanet_runtime/struct.Runtime.html\" title=\"struct betanet_runtime::Runtime\">Runtime</a>&gt;, CheckGenesis&lt;<a class=\"struct\" href=\"betanet_runtime/struct.Runtime.html\" title=\"struct betanet_runtime::Runtime\">Runtime</a>&gt;, CheckMortality&lt;<a class=\"struct\" href=\"betanet_runtime/struct.Runtime.html\" title=\"struct betanet_runtime::Runtime\">Runtime</a>&gt;, CheckNonce&lt;<a class=\"struct\" href=\"betanet_runtime/struct.Runtime.html\" title=\"struct betanet_runtime::Runtime\">Runtime</a>&gt;, CheckWeight&lt;<a class=\"struct\" href=\"betanet_runtime/struct.Runtime.html\" title=\"struct betanet_runtime::Runtime\">Runtime</a>&gt;, ChargeTransactionPayment&lt;<a class=\"struct\" href=\"betanet_runtime/struct.Runtime.html\" title=\"struct betanet_runtime::Runtime\">Runtime</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">)</a>&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u128.html\">u128</a>&gt; for <a class=\"struct\" href=\"betanet_runtime/struct.Runtime.html\" title=\"struct betanet_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["betanet_runtime::Runtime"]}];
implementors["statemine_runtime"] = [{"text":"impl TransactionPaymentApi&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, UncheckedExtrinsic&lt;MultiAddress&lt;&lt;&lt;MultiSignature as Verify&gt;::Signer as IdentifyAccount&gt;::AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.unit.html\">()</a>&gt;, <a class=\"enum\" href=\"statemine_runtime/enum.Call.html\" title=\"enum statemine_runtime::Call\">Call</a>, MultiSignature, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">(</a>CheckSpecVersion&lt;<a class=\"struct\" href=\"statemine_runtime/struct.Runtime.html\" title=\"struct statemine_runtime::Runtime\">Runtime</a>&gt;, CheckTxVersion&lt;<a class=\"struct\" href=\"statemine_runtime/struct.Runtime.html\" title=\"struct statemine_runtime::Runtime\">Runtime</a>&gt;, CheckGenesis&lt;<a class=\"struct\" href=\"statemine_runtime/struct.Runtime.html\" title=\"struct statemine_runtime::Runtime\">Runtime</a>&gt;, CheckMortality&lt;<a class=\"struct\" href=\"statemine_runtime/struct.Runtime.html\" title=\"struct statemine_runtime::Runtime\">Runtime</a>&gt;, CheckNonce&lt;<a class=\"struct\" href=\"statemine_runtime/struct.Runtime.html\" title=\"struct statemine_runtime::Runtime\">Runtime</a>&gt;, CheckWeight&lt;<a class=\"struct\" href=\"statemine_runtime/struct.Runtime.html\" title=\"struct statemine_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"pallet_asset_tx_payment/struct.ChargeAssetTxPayment.html\" title=\"struct pallet_asset_tx_payment::ChargeAssetTxPayment\">ChargeAssetTxPayment</a>&lt;<a class=\"struct\" href=\"statemine_runtime/struct.Runtime.html\" title=\"struct statemine_runtime::Runtime\">Runtime</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">)</a>&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u128.html\">u128</a>&gt; for <a class=\"struct\" href=\"statemine_runtime/struct.Runtime.html\" title=\"struct statemine_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["statemine_runtime::Runtime"]}];
implementors["statemint_runtime"] = [{"text":"impl TransactionPaymentApi&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, UncheckedExtrinsic&lt;MultiAddress&lt;&lt;&lt;MultiSignature as Verify&gt;::Signer as IdentifyAccount&gt;::AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.unit.html\">()</a>&gt;, <a class=\"enum\" href=\"statemint_runtime/enum.Call.html\" title=\"enum statemint_runtime::Call\">Call</a>, MultiSignature, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">(</a>CheckSpecVersion&lt;<a class=\"struct\" href=\"statemint_runtime/struct.Runtime.html\" title=\"struct statemint_runtime::Runtime\">Runtime</a>&gt;, CheckTxVersion&lt;<a class=\"struct\" href=\"statemint_runtime/struct.Runtime.html\" title=\"struct statemint_runtime::Runtime\">Runtime</a>&gt;, CheckGenesis&lt;<a class=\"struct\" href=\"statemint_runtime/struct.Runtime.html\" title=\"struct statemint_runtime::Runtime\">Runtime</a>&gt;, CheckMortality&lt;<a class=\"struct\" href=\"statemint_runtime/struct.Runtime.html\" title=\"struct statemint_runtime::Runtime\">Runtime</a>&gt;, CheckNonce&lt;<a class=\"struct\" href=\"statemint_runtime/struct.Runtime.html\" title=\"struct statemint_runtime::Runtime\">Runtime</a>&gt;, CheckWeight&lt;<a class=\"struct\" href=\"statemint_runtime/struct.Runtime.html\" title=\"struct statemint_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"pallet_asset_tx_payment/struct.ChargeAssetTxPayment.html\" title=\"struct pallet_asset_tx_payment::ChargeAssetTxPayment\">ChargeAssetTxPayment</a>&lt;<a class=\"struct\" href=\"statemint_runtime/struct.Runtime.html\" title=\"struct statemint_runtime::Runtime\">Runtime</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">)</a>&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u128.html\">u128</a>&gt; for <a class=\"struct\" href=\"statemint_runtime/struct.Runtime.html\" title=\"struct statemint_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["statemint_runtime::Runtime"]}];
implementors["westmint_runtime"] = [{"text":"impl TransactionPaymentApi&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, UncheckedExtrinsic&lt;MultiAddress&lt;&lt;&lt;MultiSignature as Verify&gt;::Signer as IdentifyAccount&gt;::AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.unit.html\">()</a>&gt;, <a class=\"enum\" href=\"westmint_runtime/enum.Call.html\" title=\"enum westmint_runtime::Call\">Call</a>, MultiSignature, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">(</a>CheckSpecVersion&lt;<a class=\"struct\" href=\"westmint_runtime/struct.Runtime.html\" title=\"struct westmint_runtime::Runtime\">Runtime</a>&gt;, CheckTxVersion&lt;<a class=\"struct\" href=\"westmint_runtime/struct.Runtime.html\" title=\"struct westmint_runtime::Runtime\">Runtime</a>&gt;, CheckGenesis&lt;<a class=\"struct\" href=\"westmint_runtime/struct.Runtime.html\" title=\"struct westmint_runtime::Runtime\">Runtime</a>&gt;, CheckMortality&lt;<a class=\"struct\" href=\"westmint_runtime/struct.Runtime.html\" title=\"struct westmint_runtime::Runtime\">Runtime</a>&gt;, CheckNonce&lt;<a class=\"struct\" href=\"westmint_runtime/struct.Runtime.html\" title=\"struct westmint_runtime::Runtime\">Runtime</a>&gt;, CheckWeight&lt;<a class=\"struct\" href=\"westmint_runtime/struct.Runtime.html\" title=\"struct westmint_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"pallet_asset_tx_payment/struct.ChargeAssetTxPayment.html\" title=\"struct pallet_asset_tx_payment::ChargeAssetTxPayment\">ChargeAssetTxPayment</a>&lt;<a class=\"struct\" href=\"westmint_runtime/struct.Runtime.html\" title=\"struct westmint_runtime::Runtime\">Runtime</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">)</a>&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u128.html\">u128</a>&gt; for <a class=\"struct\" href=\"westmint_runtime/struct.Runtime.html\" title=\"struct westmint_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["westmint_runtime::Runtime"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()