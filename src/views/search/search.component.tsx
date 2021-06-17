import React, { useEffect } from "react";
import { Content, Left, Body, Thumbnail, View, Button, Right, Card, Image, ListItem } from 'native-base';
import { Container, Header, Text, Icon, CardItem, InputSearch, Spinner } from '../../components/ui-element';
import { SearchScreenNavigationProp, SearchScreenRouteProp } from "../../models/navigation/type";
import { Alert, FlatList } from "react-native";
import { feedService } from "../../services/youtube/feed.service";
import { environment } from "../../environments/environment";
import { LoadingListSearch } from "../../components/skeleton/loadingListSearch";

type Props = {
  route: SearchScreenRouteProp;
  navigation: SearchScreenNavigationProp;
};

export default function Search({ navigation }: Props) {

  const isCancelled = React.useRef(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [dataSuggestions, setDataSuggestions] = React.useState<Array<any>>([]);
  const [inputSearch, setInputSearch] = React.useState<string>('');
  const searchResult: any = [];
  const pageSize: number = 20;
  const params = {
    ds: 'yt',
    client: 'youtube',
    q: ''
  }

  useEffect(() => {
    return () => {
      isCancelled.current = true;
    };
  }, []);

  function searchFormat(data: any) {
    data.split('[').forEach((ele: any, index: any) => {
      if (!ele.split('"')[1] || index === 1) return;
      return searchResult.push(ele.split('"')[1]);
    });
    setDataSuggestions(searchResult);
    console.log(searchResult);
  }

  const onClickSearch = () => {
    navigation.navigate('SearchResult', { query: inputSearch });
  }
  const typingSearch = (text: string) => {
    console.log(text)
    setInputSearch(text)
    loadDataSearch()
  }

  const loadDataSearch = () => {

    setIsLoading(true);
    params.q = inputSearch;
    feedService.searchSuggest(params).then((response) => {
      console.log(response.data)
      searchFormat(response.data);
    }).catch((error) => {
      console.log(error.response)
    }).then(() => {
      setIsLoading(false);
    })
  }

  const renderRow = ({ item }: any) => {
    return (<ListItem icon onPress={()=> navigation.push('SearchResult', { query: item }) }>
      <Left>
        <Button transparent>
          <Icon active name="search" />
        </Button>
      </Left>
      <Body>
        <Text>{item}</Text>
      </Body>
    </ListItem>);
  };

  const LoadingContent = () => {
    return (
      <View>
      {
        Array.apply(null, Array(6)).map((item, key)=>
        <LoadingListSearch key={key} />
        )
      }
    </View>
    )
  }

  const renderFooter = () => {
    if (!isLoading) return null;
    return (<View><LoadingContent /></View>);
  };

  return (<Container>
    <Header searchBar noShadow rounded>
      <Button transparent onPress={() => navigation.goBack()}>
        <Icon name='arrow-left' type="Feather" style={{ color: '#9f2349' }} />
      </Button>
      <InputSearch placeholder='Pesquisar' onChangeText={(text) => typingSearch(text)}  onPressSearch={onClickSearch} />
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>
      <View>
      <FlatList
        data={dataSuggestions}
        renderItem={renderRow}
        keyboardDismissMode="interactive"
keyboardShouldPersistTaps="handled"
        ListFooterComponent={renderFooter}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
  </Container>);
}