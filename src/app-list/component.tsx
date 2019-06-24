import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import {AppState, IItem} from './state'

interface IItemProps {
    id: number;
    item: IItem;
}

interface ListProps {
    Items: ReadonlyArray<IItem>;
    Add: () => void;
}

let renderCount:number = 0;

const Item = (item: IItem) => {

    console.log('render', ++renderCount);

    return <div>{item.id} : {item.title}</div>;
};

class ItemClass extends React.Component<IItemProps>{

    render(){
        const { item } = this.props;

        console.log('render', ++renderCount);

        return <div>{item.id} : {item.title}</div>;
    }
}

const mapStateItem = (state: AppState, props: any) =>{
    return {
        item: state.Items.filter(x => x.id == props.id)[0]
    }
};

const ConnectedItem = connect(mapStateItem, null)(ItemClass)


class List extends React.Component<ListProps>{

    render(){
        const { Items, Add } = this.props;

       // const  items = Items.map(x => <Item {...x} key={x.id} />);

        const  items = Items.map(x => <ConnectedItem id={x.id} key={x.id} />);

        return <div>
                <input type="button" onClick={() => Add()} value="Add" />
                {items}
            </div>
    }
}

const mapStateList = (state: AppState) => {
    return {
        Items: state.Items
    }
};

const mapDispatchList = (dispatch: Dispatch) => {

    let counter: number = 0;

    return {
        Add: () => dispatch({ type:"ADD", item: { id: ++counter, title: 'one' } })
    }
};

export const TestComponentList = connect(mapStateList, mapDispatchList)(List)
