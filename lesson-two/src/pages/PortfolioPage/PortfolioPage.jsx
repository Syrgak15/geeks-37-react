import Portfolio from "../../components/Portfolio/Portfolio";

const portfolioList= [
    {
        id:1,
        title:"Geeks",
        description: "Geeks description"
    },
    {
        id:2,
        title:"Geeks online",
        description: "Geeks online description"
    },
    {
        id:3,
        title:"Geeks pro",
        description: "Geeks pro description"
    }
]

function PortfolioPage(props) {
    return (
        <div>
            <h2>Portfolio Page</h2>
            {
                portfolioList.map(portfolio => (
                    <>
                        <Portfolio key={portfolio.id} info={portfolio}/>
                    </>
                ))
            }
        </div>
    );
}

export default PortfolioPage;