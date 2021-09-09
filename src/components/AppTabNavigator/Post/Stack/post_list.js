import React, {Component} from 'react';
import { StyleSheet, Dimensions, View, Text, FlatList, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const style= StyleSheet.create({
    root:{flex:1, padding:5, backgroundColor: 'white' },
    
    titleText:{
        fontSize:0.05*Width,
        fontWeight:'bold',
        flex: 0,
        paddingTop:5,
        paddingBottom:10,
    },

    userinfoView:{
        flex:1,
        flexDirection:'column',
    },

    contentView:{
        flexDirection:'row',
        alignItems: 'center',
        width: '100%',
        borderWidth:1,
        borderColor: 'darkgrey',
        padding:10,
        marginBottom:10,
        backgroundColor: 'white',
    },

    post_btn:{
        textAlign: 'center',
        alignItems: 'center',
        marginLeft: '40%',
        width: '20%',
        padding:10,
        marginBottom:3,
        borderRadius: 6,
        backgroundColor: 'dodgerblue',
    },
    
    img:{
        flex:1,
        width: 50,
        height: 100,
    },
    
    title_content:{
        fontSize:0.05*Width,
        fontWeight:'bold',
    },
    
    contentText:{
        fontSize:0.03*Width,
    },
    
    commit_count_num:{
        color: 'darkgrey',
    },

    Loading: {
        fontSize:0.05*Width,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 300
    },
    
    commit_View: {
        flex:1,
        flexDirection:'row',
        position: 'absolute', 
        right: 0,
    },
});

    
export default class Post_list extends Component{

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

        let url = "http://192.168.0.5/App/User_News/service/_userNews_get_.php"

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

    Post_write(){
        this.props.navigation.navigate('Post_write');
    }
    
    Post_details(item){
        this.props.navigation.navigate('Postdetails', {item: item});
    }

    render(){
        const { isLoading } = this.state;
        
        if (isLoading) {
            return <View>
                <Text style={style.Loading}> 게시판 받아오는중 ...</Text>
            </View>
        }

        return( 
            <View style={style.root}>
                <TouchableOpacity 
                    style={style.post_btn} 
                    onPress={() => this.Post_write()}>
                    <Text style={{color:'white', fontWeight: 'bold',}}>글 쓰기</Text>
                </TouchableOpacity>
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
                    onPress={()=> this.Post_details(item)}>
                    
                    <View style={style.userinfoView}>
                        <Text style={style.title_content}>{item.title}</Text>
                        <Text style={style.contentText}>{item.w_user}</Text>
                        <Text style={style.contentText}>{item.content}</Text>
                        
                        <View style={style.commit_View}>
                            <Ionicons  
                                color='red'
                                size={13} 
                                name='chatbubble-ellipses-outline' 
                                style={{ bottom: 0 }}/>
                            <Text style={style.commit_count_num}> {item.count}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
