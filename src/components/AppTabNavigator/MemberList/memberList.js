import React, {Component} from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image, SafeAreaView} from 'react-native';
import style from "./styles";
    
export default class memberList extends Component{

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

        let url = "http://127.0.0.1/method_request.php"

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

        fetchData() {
            alert('refreshing data');
        }
    
    MemberListInfo(item){
        this.props.navigation.navigate('UserInfoPage', {item: item});
    }

    render(){
        const { isLoading } = this.state;
        
        if (isLoading) {
            return <View>
                <Text style={style.Loading}> 사용자 받아오는중 ...</Text>
            </View>
        }

        return( 
            <View style={style.root}>
                <FlatList
                    data={this.state.fetch_datas} 
                    renderItem={this.renderItem}
                    keyExtractor={ item=> item.name }
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
                <TouchableOpacity 
                    style={style.contentView} 
                    onPress={()=> this.MemberListInfo(item)}
                    >

                    <View style={style.userinfoView}>
                        <Text style={style.UserName}>{item.name}</Text>
                        <Text style={style.contentText}>학번: {item.stu_num}</Text>
                        <Text style={style.contentText}>학과: {item.dep}</Text>
                        <Text style={style.contentText}>소속: {item.now_gp}</Text>
                        <Text style={style.contentText}>주소: {item.ar}</Text>
                    </View>

                    <Image
                        style={style.img}
                        source={require('../../../../assets/defalutUserImg.png')}
                    />

                </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
