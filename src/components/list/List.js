import ListItem from './ListItem';

const List = ({data, header}) => {
  return ( 
    <div className="section pd-tb25">
      <h2 className="list-header">{header}</h2>
      {data.results.map((item, index) => (
        <ListItem key={index} movie={item} index={index} />
      ))}
    </div>
   );
}
 
export default List;