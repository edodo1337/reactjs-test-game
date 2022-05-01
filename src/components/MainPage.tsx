import { observer } from 'mobx-react-lite';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

interface MainPageProps {
    // header?: React.ReactNode;
    // content?: React.ReactNode;
    // footer?: React.ReactNode;
    // gameStore: GameStore
}

const MainPage = observer((props: MainPageProps) => {
    return (
        <div className='main'>
            <Header />
            <Content />
            <Footer />
        </div>
    );
});

export { MainPage };
