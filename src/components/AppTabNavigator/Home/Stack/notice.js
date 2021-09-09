import React, {Component} from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image, SafeAreaView} from 'react-native';
import style from "./styles";
    
export default class notice extends Component{
    constructor(props){ 
        super(props); 
            this.state={
                fetch_datas: [],
                
                isLoading: false,
                isFetching: false
            };
    }

    componentDidMount() {
        this.setState({ isLoading: true});

        let url = "http://127.0.0.1/App/notice_list.php"

            fetch( url ,  {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            .then(console.log("get fetch_datas run..."))
            .then(res => {
                console.log(JSON.stringify(res));
                return res.json()})
            .then(res => this.setState({ fetch_datas: res, isLoading: false }, 
                () => console.log('data Success')))
            .catch(err => { console.log('DATA GET ERROR',{ err })})
        }

    onRefresh() {
        console.log('refreshing')
        this.setState({ isFetching: true }, function(){
            this.fetchData()
        });
    }
    
    MemberListInfo(item){
        this.props.navigation.navigate('UserInfoPage', {item: item});
    }

    render(){
        const { isLoading } = this.state;
        
        if (isLoading) {
            return <View>
                <Text style={style.Loading}> 공지사항 받아오는중 ...</Text>
            </View>
        }

        return( 
            <View style={style.root}>
                <FlatList
                    data={this.state.fetch_datas} 
                    renderItem={this.renderItem}
                    keyExtractor={ item=> item.num }
                    onRefresh={() => this.onRefresh}
                    refreshing={this.state.isFetching}
                    />
            </View>
        );
    }

    renderItem=({item})=>{ 
        console.log(item);
        return(
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                <TouchableOpacity style={style.contentView} >

                    <View style={style.noticeView}>
                        <Text style={style.titleText}>{item.title}</Text>
                        <Text style={style.contentText}>{item.content}</Text>
                        <Text style={style.regText}>{item.regist_day}</Text>
                    </View>

                </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
