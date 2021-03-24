
import { WebPartContext } from '@microsoft/sp-webpart-base';

import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from '@microsoft/sp-http';


/**
 * 
 * Credit due to for the tip:
 * https://www.facebook.com/groups/2268502550044442/user/610953312/
 * 
 * Source info:
 * https://joshmccarty.com/sharepoint-online-embedservice-api/?fbclid=IwAR1r9JHiWuCRrF1l3w1qJ-Iolhe44QmtC8HbSxN3Kb-v9kHDzui96iRqOBc
 * 
 * API Info:
 * https://s-kainet.github.io/sp-rest-explorer/?fbclid=IwAR1r9JHiWuCRrF1l3w1qJ-Iolhe44QmtC8HbSxN3Kb-v9kHDzui96iRqOBc#/entity/SP.Publishing.EmbedService
 * 
 * @param thisContext
 * @param webUrl 
 */
export function getEmbedInfo( thisContext: WebPartContext , webUrl: string){

    let embedData: any = {};

    thisContext.spHttpClient.get( thisContext.pageContext.web.absoluteUrl + 
        `/_api/SP.Publishing.EmbedService/EmbedData?url=%27${ encodeURIComponent(webUrl)}%27&version=1`,
        SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse ) : Promise<any> => {
            if ( response.ok ) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then((data: any) : Promise<any> => {
            embedData = data;
            console.log( 'embedData', embedData );
            return embedData;
        });

}