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

        let url = "http://192.168.0.108:80/usergetpost.php"

            fetch( url ,  {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            
            .then(console.log("get fetch_datas run..."))
            .then(res => {
                console.log(res);
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
            <ScrollView>
                <View style={style.root}>
                    <Text style={style.titleText}>사용자</Text>
                    <FlatList
                        data={this.state.fetch_datas} 
                        renderItem={this.renderItem}
                        keyExtractor={ item=> item.email }
                        onRefresh={() => this.onRefresh}
                        refreshing={this.state.isFetching}
                        />
                </View>
            </ScrollView>
        );
    }

    renderItem=({item})=>{ 

        console.log(item);

        return(
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableOpacity 
                    style={style.contentView} 
                    onPress={()=> this.MemberListInfo(item)}
                    >

                    <View style={style.userinfoView}>
                        <Text style={style.UserName}>{item.name}</Text>
                        <Text style={style.contentText}>{item.add}</Text>
                        <Text style={style.contentText}>{item.bir}</Text>
                        <Text style={style.contentText}>{item.dep}</Text>
                        <Text style={style.contentText}>{item.email}</Text>
                        <Text style={style.contentText}>{item.pos}</Text>
                    </View>

                    <Image
                        style={style.img}
                        source={require('../../../../assets/defalutUserImg.png')}
                    />

                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
