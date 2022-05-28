import ListItem from './ListItem';
import ListPerson from './ListPerson';

const List = ({data, header}) => {
  return ( 
    <div className="section pd-tb25">
      <h2 className="list-header">{header}</h2>
      {data && data.results?.map((item, index) => (
        item.media_type === 'person' ?
          <ListPerson key={index} person={item} index={index} />
        :
          <ListItem key={index} movie={item} index={index} />
      ))}
    </div>
   );
}
 
export default List;