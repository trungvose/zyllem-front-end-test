import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './model/article';
import { delay } from "rxjs/operators";

@Injectable()
export class ZyllemApiService {

    getArticles(): Observable<Article[]> {
        const articles: any[] = [
            {
                id: "1",
                url: "https://www.zyllem.com/single-post/2019/01/05/Feature-Highlight-Zyllem-Planning-Module",
                author: "Linh Phan",
                publishedAt: "2019-01-04T16:00:00.000Z",
                title: "Feature Highlight: Planning Module",
                type: "FEATURED",
                featureImgUrl: "https://static.wixstatic.com/media/15e42d_62ed7c59561e452ead75691524ea4e1e~mv2.png/v1/fill/w_650,h_489,al_c,q_80,usm_0.66_1.00_0.01/15e42d_62ed7c59561e452ead75691524ea4e1e~mv2.webp"
            },
            {
                id: "2",
                url: "https://www.zyllem.com/single-post/2019/01/07/Feature-Highlight-Cash-on-Delivery",
                author: "Rhocela Pasigna",
                publishedAt: "2018-12-06T16:00:00.000Z",
                title: "Feature Highlight: Cash on Delivery (COD)",
                type: "NORMAL",
                description: `<p><span><span style="font-weight:bold;"><span>COD is here to stay</span></span></span><br>
                <span><span>In our engagements with enterprises across Asia, we find that COD remains a preferred payment method by many enterprise customers. In between pre-payment risks, late credit payments, online security concerns, or just the convenience and familiarity...</span></span></p>`,
            },
            {
                id: "3",
                url: "https://www.zyllem.com/single-post/2018/11/17/Zyllem-Goes-Live-in-Vietnam",
                author: "Rhocela Pasigna",
                publishedAt: "2018-11-16T16:00:00.000Z",
                title: "Zyllem Goes Live in Vietnam!",
                type: "NORMAL",
                description: `<div><p><span><span style="font-style:italic;">Innovation meets tradition as Zyllem goes live in Vietnam! Our customer has thoughtfully prepared this offering as they officially start their journey to digitization through our platform today.</span></span></p><p><span>Amidst a busy year-end with a full feature roadmap in our hands, our team a...</span></p></div>`,
            },
            {
                id: "4",
                url: "https://www.zyllem.com/single-post/2018/07/04/Microsoft-and-Zyllem-Partner-to-Transform-the-Logistics-Industry",
                author: "Rhocela Pasigna",
                publishedAt: "2018-07-03T16:00:00.000Z",
                title: "Microsoft and Zyllem Partner to Transform the Logistics Industry",
                type: "NORMAL",
                description: `<p style="font-size: 16px; text-align: justify;"><span style="font-size: 16px;"><span style="font-weight: bold;">SINGAPORE</span> – Microsoft and Zyllem today announced the availability of Zyllem Enterprise on Microsoft Azure, allowing enterprises to fully digitize their logistics processes while achieving infrastructure compliance and utmost security.</span></p>`,
            }
        ];

        return of(articles).pipe(delay(1000));
    }
}