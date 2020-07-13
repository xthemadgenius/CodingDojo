import React from 'react';
import { HeadButt, TabBtn } from './Styles';

const Tabs = ({tabs, setContent}) => {
    const tabClick = (e, item) => {
        setContent({
            content: item.content,
            color: item.color,
        });
    }
    
    return (
        <div>
            <HeadButt>
                {tabs.map((item, i) =>
                    <TabBtn onClick={(e) => tabClick(e, item)} key={i}>{item.label}</TabBtn>
                )}
            </HeadButt>
        </div>
    )
}

export default Tabs;