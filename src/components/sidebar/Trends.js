import React from 'react'

import { Button } from 'primereact/button';

export default function Trends() {

    const trendsList = [
        {title: "Economy", info: "Tranding in Turkey", count: "4,348 Tweets"},
        {title: "Country", info: "Tranding in Turkey", count: "23.4K Tweets"},
        {title: "New York", info: "Tranding in ABD", count: "66.7K Tweets"},
        {title: "Christmas", info: "Tranding in Turkey", count: "50.6K Tweets"},
        {title: "Paris", info: "Tranding in Turkey", count: "10.2K Tweets"},
        {title: "Holiday", info: "Tranding in Turkey", count: "30.5K Tweets"},
        {title: "Istanbul", info: "Tranding in Turkey", count: "8,678 Tweets"},
        {title: "NBA", info: "Sports - Tranding", count: "80.9K Tweets"},
        {title: "Times Square", info: "Tranding in ABD", count: "13.4K Tweets"},
        {title: "Taksim", info: "Tranding in Turkey", count: "15.7K Tweets"},
    ]
    
  return (
    <div className='trends-component'>
        <div className='trends-component-title'>
            <h3>Trends for you</h3>
        </div>
        <div className='trends-component-content'>
            <ul className='trends-list'>
                {
                    trendsList.map((item) => {
                        return (
                            <li className='trends-list-item'>
                                <div>
                                    <div className='trends-list-item-info'>{item.info}</div>
                                    <div className='trends-list-item-title'>{item.title}</div>
                                    <div className='trends-list-item-info'>{item.count}</div>
                                </div>
                                <div>
                                    <Button className='p-button-rounded p-button-text three-dot-button' icon="pi pi-ellipsis-h"/>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <Button className='p-button-text w-full show-more-button' label='Show more' />
        </div>
    </div>
  )
}
