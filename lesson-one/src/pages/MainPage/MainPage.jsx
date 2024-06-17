import Layout from "../../components/HOC/Layout";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import User from "../../components/User/User";
import {About} from "../../components/About/About";
import {Title} from "../../components/Title/Title";

function MainPage() {
    return (
        <div>
            <ul>
                <Layout>
                    <Header/>
                    <Footer/>
                    <User name='anna'/>
                    <User name='sergo'/>
                    <User name='nick'/>
                </Layout>
            </ul>
            <Title text="Hello world"/>
            <About info={{title: "Some Title", body:"Some body"}}/>
        </div>
    );
}

export default MainPage;