(function() {var implementors = {};
implementors["axia_collator"] = [{"text":"impl&lt;Client&gt; Verifier&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, OpaqueExtrinsic&gt;&gt; for <a class=\"struct\" href=\"axia_collator/service/struct.Verifier.html\" title=\"struct axia_collator::service::Verifier\">Verifier</a>&lt;Client&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: ProvideRuntimeApi&lt;<a class=\"type\" href=\"axia_collator/service/type.Block.html\" title=\"type axia_collator::service::Block\">Block</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client::Api: AuraApi&lt;<a class=\"type\" href=\"axia_collator/service/type.Block.html\" title=\"type axia_collator::service::Block\">Block</a>, AuraId&gt;,&nbsp;</span>","synthetic":false,"types":["axia_collator::service::Verifier"]}];
implementors["cumulus_client_consensus_relay_chain"] = [{"text":"impl&lt;Client, Block, CIDP&gt; Verifier&lt;Block&gt; for <a class=\"struct\" href=\"cumulus_client_consensus_relay_chain/struct.Verifier.html\" title=\"struct cumulus_client_consensus_relay_chain::Verifier\">Verifier</a>&lt;Client, Block, CIDP&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: BlockT,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: ProvideRuntimeApi&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Client as ProvideRuntimeApi&lt;Block&gt;&gt;::Api: BlockBuilderApi&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP: CreateInherentDataProviders&lt;Block, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.unit.html\">()</a>&gt;,&nbsp;</span>","synthetic":false,"types":["cumulus_client_consensus_relay_chain::import_queue::Verifier"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()