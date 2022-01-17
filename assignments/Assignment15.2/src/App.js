import React from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import BookListScreen  from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookListInfoScreen from './screens/BookListInfoScreen';
import AddBook from './screens/AddNewBookScreen';
import Login from './screens/LoginScreen';
const App=({})=>{

    return <div className="App">
               <AppHeader title="World Wide Books" />
               <div className='Screen'>
                    <BookListInfoScreen />
                    {/* <BookListScreen/> */}
                    {/* <AddBook /> */}
                    {/* <Login /> */}
               </div>
               <AppFooter />
            </div>
};

export default App;