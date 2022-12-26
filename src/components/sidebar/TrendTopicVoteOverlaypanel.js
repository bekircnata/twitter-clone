import React from "react";
import "../menu/menuOverlaypanel.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons'

import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";

export default function TrendTopivVoteOverlaypanel({op, trendTopicList, setTrendTopicList, selectedTrendTopic}) {

    const voteFunc = (event) => {
        op.current.toggle(event)
        setTrendTopicList(trendTopicList.filter((item) => item.Id !== selectedTrendTopic.Id))
    }

  return (
    <div>
      <OverlayPanel ref={op} id="overlay_panel" style={{ width: "300px" }} className="overlaypanel" >
        <div className="overlaypanel-content" style={{borderTop: "none", marginTop: "5px"}}>
          <Button className="overlaypanel-items global-text-button p-button-text w-full" onClick={(e) => voteFunc(e)}>
            <FontAwesomeIcon icon={faFaceFrown} className="icon mr-3" />
            <span>Not interested in this</span>
          </Button>

          <Button className="overlaypanel-items  global-text-button p-button-text w-full" onClick={(e) => voteFunc(e)}>
            <FontAwesomeIcon icon={faFaceFrown} className="icon mr-3" />
            <span>This trend is harmful or spammy</span>
          </Button>
        </div>
      </OverlayPanel>
    </div>
  );
}
