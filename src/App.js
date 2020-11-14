import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import BookedTable from './components/views/BookedTable/BookedTable';
import BookedEvent from './components/views/BookedEvent/BookedEvent';
import OrderForm from './components/views/OrderForm/OrderForm';
import CreateOrder from './components/views/CreateOrder/CreateOrder';
import TableOrder from './components/views/TableOrder/TableOrder';
import Kitchen from './components/views/Kitchen/Kitchen';

import {setMultipleStates} from './redux/globalRedux';


class App extends React.Component {
  static propTypes = {
    setStates: PropTypes.func,
  }
  
  render(){
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={`/`} component={Home} />
            {/*liczba zrealizowanych oraz wszystkich dzisiejszych zamówień zdalnych,
                  liczba zrealizowanych oraz wszystkich dzisiejszych zamówień lokalnych,
                  liczba wszystkich dzisiejszych rezerwacji,
                  liczba wszystkich dzisiejszych eventów, */}

            <Route exact path={`/login`} component={Login} />
            {/* zawiera pola na nazwę użytkownika i hasło (brak funkcjonalności),
                      zawiera również guzik będący linkiem do strony głównej /,*/}

            <Route exact path={`/tables`} component={Tables} />
            {/* ten widok wygląda jak tabela (ale może być wygodniej nie robić go za pomocą <table>),
                  każdy stolik to jedna kolumna,
                  każdy wiersz to okres 30 minut,
                  wszystkie rezerwacje i eventy są naniesione na tę tabelę w odpowiednim miejscu,
                  w efekcie osiągniemy widok podobny do Kalendarza Google w widoku tygodniowym (ale kolumnami będą stoliki zamiast kolejnych dni),
                  po kliknięciu rezerwacji lub eventu, szczegóły pojawiają się na osobnej stronie,*/}

            <Route exact path={`/tables/booking/:id`}component={BookedTable} />
            {/*widok pojedynczej rezerwacji:
              zawiera wszystkie szczegóły tej rezerwacji (data, godzina, stolik, liczba osób, etc.),
              umożliwia edycję każdego parametru rezerwacji,*/}
            
            <Route exact path={`/tables/event/:id`} component={BookedEvent} />
            {/* widok pojedynczego eventu:
              analogiczny do widoku pojedynczej rezerwacji, może nawet korzystać z tego samego komponentu,*/}

            <Route exact path={`/ordering`} component={OrderForm} />
            {/* widok kelnera:
              zawiera listę stolików,
              dla każdego stolika musi być guzik nowego zamówienia,
              dla każdego stolika wyświetla listę aktywnych zamówień (czyli o statusie innym niż done lub cancelled),
              na liście aktywnych zamówień wyświetlamy tylko podsumowanie zamówienia, czyli np. status, datę stworzenia i sumę zamówienia,
              zamówienia ze statusem ready muszą być wyszczególnione, np. za pomocą koloru tła, oraz wyświetlać guzik do szybkiej zmiany statusu na delivered,
              po kliknięciu w zamówienie otwiera się widok pojedynczego zamówienia /ordering/:id,*/}

            <Route exact path={`/ordering/new`} component={CreateOrder} />
            {/*widok składania zamówienia:
            zawiera edytowalne informacje o zamówieniu, czyli datę stworzenia zamówienia oraz numer stolika,
            data zamówienia domyślnie wyświetla się bieżąca,
            numer stolika jest automatycznie wypełniony, tylko jeśli użytkownik wszedł na tę stronę za pomocą guzika w widoku /ordering,
            widok zawiera menu, czyli listę produktów z ich opcjami oraz polem na notatki,
            widok zawiera koszyk, czyli listę zamówionych produktów, które można usuwać, tylko jeśli zamówienie ma status ordered,
            koszyk musi podliczać ceny zamówionych produktów, */}

            <Route exact path={`/ordering/order/:id`} component={TableOrder} />
            {/* widok pojedynczego zamówienia:
            wyświetla wszystkie informacje o zamówieniu,
            jeśli zamówienie ma status new, działa identycznie jak widok /ordering/new
            przy każdym innym statusie nie będzie zawierał menu produktów, a z koszyka nie będzie można usuwać produktów,*/}

            <Route exact path={`/kitchen`} component={Kitchen} />
            {/*widok kuchni:
            wyświetla dwie kolumny – z listą zamówień lokalnych oraz z dostawą,
            zamówienia są posortowane wedle daty złożenia zamówienia,
            zamówienie wyświetla wszystkie informacje (oprócz cen), a przede wszystkim produkty z opcjami i notatkami. */}
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);