
import {Skeleton} from "antd";


const RowPlaceholder = ({ count=3}) => {

    var elements=[];
    for(var i=0; i<count; i++){
        elements.push(
            <Skeleton
                width='100%'
                count={1}
                key={i}
                style={{ height: 10, marginBottom: 15, marginTop:10}}
            />);
    }

    return elements
}

export default RowPlaceholder;