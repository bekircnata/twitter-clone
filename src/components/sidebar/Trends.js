import React, { useEffect, useRef, useState } from 'react'

import { Button } from 'primereact/button';
import TrendTopivVoteOverlaypanel from './TrendTopicVoteOverlaypanel';

export default function Trends() {

    const op = useRef(null)
    const [trendTopicList, setTrendTopicList] = useState(null)
    const [selectedTrendTopic, setSelectedTrendTopic] = useState(null)

    const trendsList = [
        {Id: 1, title: "Economy", info: "Tranding in Turkey", count: "4,348 Tweets"},
        {Id: 2, title: "Country", info: "Tranding in Turkey", count: "23.4K Tweets"},
        {Id: 3, title: "New York", info: "Tranding in ABD", count: "66.7K Tweets"},
        {Id: 4, title: "Christmas", info: "Tranding in Turkey", count: "50.6K Tweets"},
        {Id: 5, title: "Paris", info: "Tranding in Turkey", count: "10.2K Tweets"},
        {Id: 6, title: "Holiday", info: "Tranding in Turkey", count: "30.5K Tweets"},
        {Id: 7, title: "Istanbul", info: "Tranding in Turkey", count: "8,678 Tweets"},
        {Id: 8, title: "NBA", info: "Sports - Tranding", count: "80.9K Tweets"},
        {Id: 9, title: "Times Square", info: "Tranding in ABD", count: "13.4K Tweets"},
        {Id: 10, title: "Taksim", info: "Tranding in Turkey", count: "15.7K Tweets"},
    ]

    useEffect(() => {
        setTrendTopicList(trendsList)
    }, [])

    const openVotePanel = (event, item) => {
        op.current.toggle(event)
        setSelectedTrendTopic(item)
    }
    
  return (
    <div className='trends-component'>
        <div className='trends-component-title'>
            <h3>Trends for you</h3>
        </div>
        <div className='trends-component-content'>
            <ul className='trends-list'>
                {
                    trendTopicList?.map((item) => {
                        return (
                            <li className='trends-list-item' key={item.Id}>
                                <div>
                                    <div className='trends-list-item-info'>{item.info}</div>
                                    <div className='trends-list-item-title'>{item.title}</div>
                                    <div className='trends-list-item-info'>{item.count}</div>
                                </div>
                                <div>
                                    <Button 
                                        className='p-button-rounded p-button-text three-dot-button' 
                                        icon="pi pi-ellipsis-h" 
                                        onClick={(e) => openVotePanel(e, item)}
                                    />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <Button className='p-button-text w-full show-more-button' label='Show more' />
        </div>
        <TrendTopivVoteOverlaypanel op={op} trendTopicList={trendTopicList} setTrendTopicList={setTrendTopicList} selectedTrendTopic={selectedTrendTopic} />
    </div>
  )
}
