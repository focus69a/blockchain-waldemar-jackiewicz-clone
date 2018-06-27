
'use strict';

async function transferNFCTag(assignTag) {



    assignTag.NFCAsset.currentOwner = assignTag.newOwner;



    let assetRegistry = await getAssetRegistry('org.callforcode.biznet.cto');



    await assetRegistry.update(assignTag.NFCAsset);



}




