import { useSelector, useDispatch } from "react-redux";
import { addToFavourites, removeFromFavourites } from "../redux/Actions";

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();

  const isFav = favourites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033" }}>
      <Col xs={3}>
        {isFav ? (
          <StarFill
            color="gold"
            size={16}
            onClick={() => dispatch(removeFromFavourites(data.company_name))}
          />
        ) : (
          <Star
            color="gold"
            size={16}
            onClick={() => dispatch(addToFavourites(data.company_name))}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
