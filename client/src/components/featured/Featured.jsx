import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=kashmir,banglore,kerala"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/06/Hill-Stations-Holidays.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kashmir</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Ubcity2.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Banglore</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.ekeralatourism.net/wp-content/uploads/2018/03/Alleppey.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kerala</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
