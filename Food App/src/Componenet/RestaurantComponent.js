import {RES_IMG_URL} from "../utils/constant";

const color = {
    color: "#db7c38",
};

const customStyle = {
    justifyContent: "space-between",
    marginTop: "10px",
};

const fontSize = {
    fontSize: "13px",
    fontWeight: "550",
    wordBreak: "break-word",
};

const RestaurantCardComponent = ({resObj}) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        area,
        avgRating,
        lastMileTravelString,
        costForTwoString,
        promoted,
        aggregatedDiscountInfoV2
    } = resObj.data;
    return (
      <div className='externalCard'>
        <div className='card'>
          <img src={RES_IMG_URL + cloudinaryImageId} />
          {promoted ? (
            <div className='res-type-conatiner'>
              <div className='restype-txt'>Promoted</div>
            </div>
          ) : (
            <div></div>
          )}
          <span style={customStyle}>
            <div style={fontSize}>{name}</div>
            <div className='cuisinedStyle'>
              {resObj.data.veg ? (
                <span className='vej_Item'>.</span>
              ) : (
                <span className='nonVej_Item'>.</span>
              )}
            </div>
          </span>
          <div className='cuisinedStyle'>{cuisines.join(", ")}</div>
          {/* <p>{area}</p> */}
          <hr />
          <div className='cuisinedStyle'>
            <div style={color}>
              <i className='fa-solid fa-star'></i>
              {avgRating}
            </div>
            <div> | </div>
            <div>{lastMileTravelString}</div>
            <div>| </div>
            <div>{costForTwoString}</div>
          </div>
          <div>
            {aggregatedDiscountInfoV2 ? (
              <div className='discount'>
                <div>
                  {aggregatedDiscountInfoV2?.header} { aggregatedDiscountInfoV2?.header ? " | " : ''}
                </div>
                <div>
                  {aggregatedDiscountInfoV2?.shortDescriptionList[0]?.meta}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="onHoverDisplay">
            I'll be come on hover
          </div>
        </div>
      </div>
    );
};

export default RestaurantCardComponent;
