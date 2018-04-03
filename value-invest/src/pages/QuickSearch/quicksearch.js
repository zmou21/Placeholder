import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import { Stockname, Quotes, Companyinfo, Companynews } from "../../components/Display";
import Chart from "../../components/Charts";
import API from "../../utils/API";

class Stocks extends Component {
  constructor() {
    super();

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.postFavorite = this.postFavorite.bind(this);
    this.searchToggle = this.searchToggle.bind(this);
    this.getChartData = this.getChartData.bind(this);
    this.getCompanyNews = this.getCompanyNews.bind(this);


    this.state = {
      ticker: "",
      companyName: "",
      price: "",
      standardPE: "",
      dayHigh: "",
      dayLow: "",
      priceChange: "",
      marketCap: "",
      volume: "",
      yearHigh: "",
      yearLow: "",
      sector: "",
      exchange: "",
      industry: "",
      website: "",
      description: "",
      logo: "",
      isHidden: true,
      chartData: {},
      companyNews: []
    };
  }


  // Add code here to get all books from the database and save them to this.state.books
  // componentDidMount() { //componentWillMount() another component option
  //   this.getBook();
  // }

  //toggles the search icon to show and hide the search field
  searchToggle(event) {
    console.log("event clicked");

    this.setState({
      isHidden: !this.state.isHidden
    })

  }

  //handles input of the form
  handleFormInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  //posts to api/route and database when a user favorites a stock
  postFavorite(event) {
    event.preventDefault();
    console.log("post route hit in quicksearch");
    API.postFavorite(this.state.companyName)
    .then(res => {
      console.log('quicksearch data', res);
    })
    .catch(err => console.log(err));
  }

  //function so that when form is submitted it calls the API route
  handleFormSubmit(event) {
    //console.log("API call is being made");
    event.preventDefault();

    API.getStocksIEX(this.state.ticker)
    .then(res => {
      console.log("---------------");
      console.log(res.data);
      console.log("---------------");

      if(this.state.ticker) {
        this.setState({
          companyName: res.data.quote.companyName,
          price: res.data.quote.latestPrice,
          standardPE: res.data.quote.peRatio,
          dayHigh: res.data.quote.high,
          dayLow: res.data.quote.low,
          priceChange: res.data.quote.change,
          marketCap: res.data.quote.marketCap,
          volume: res.data.quote.latestVolume,
          yearHigh: res.data.quote.week52High,
          yearLow: res.data.quote.week52Low
        });
      }
    })
    .catch(err => console.log(err));

    API.getCompanyInfo(this.state.ticker)
    .then(res => {
      // console.log(res.data);
      if(this.state.ticker) {
        this.setState({
          sector: res.data.sector,
          exchange: res.data.exchange,
          website: res.data.website,
          description: res.data.description,
          industry: res.data.industry
        });
      }
    })
    .catch(err => console.log(err));

    API.getStockLogo(this.state.ticker)
    .then(res => {
      // console.log(res.data.url);
      if(this.state.ticker) {
        this.setState({
          logo: res.data.url
        });
      }
    })
    .catch(err => console.log(err));

    this.getChartData();
    this.getCompanyNews();
  };

  //grabs chart data and displays it on the site
  getChartData(){
    let label = [];
    let dataClose = [];
    let dataOpen = [];

    API.getStocksIEX(this.state.ticker)
    .then(res => {

      for (let i = 0; i < res.data.chart.length; i++) {
        //console.log(res.data.chart[i].date);
        label.push(res.data.chart[i].date);
        dataClose.push(res.data.chart[i].close);
        dataOpen.push(res.data.chart[i].open);
      }

      if(this.state.ticker) {
        this.setState({
          chartData:{
            labels: label,
            datasets:[
              {
                label:'Close Prices',
                data: dataClose,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)'
                ]
              },
              {
                label:'Open Prices',
                data: dataOpen,
                backgroundColor:[
                  'rgba(75, 192, 192, 0.6)'
                ]
              }
            ]
          }
        });
      };
    });
  };

  //function to grab company news and render it on the page
  getCompanyNews(){
    let news = [];

    API.getStocksIEX(this.state.ticker)
    .then(res => {

      for (let i = 0; i < res.data.news.length; i++) {
        //console.log(res.data.news[i]);
        news.push(res.data.news[i]);
      }

      if(this.state.ticker) {
        this.setState ({
          companyNews: news
        })
      }

    });
  }

  getTickers() {
    //   API.getTickers()
    //   .then(res => {
    //     console.log(res);
    //   })
    //
    //   this.getChartData();
    //   this.getCompanyNews();
    // };
  }

//className="grid-container"
  render() {
    return (
      <div>
        <div>
          {this.state.isHidden ? (
              <div className="search-button">
                <h3 className="quicksearch-name">Quick Search</h3>
                <i className="search-toggle fas fa-search" onClick={this.searchToggle}></i>
              </div>
              ) : (
              <div>
                {!this.state.price ? ( //ternary operator that displays only if stock is searched
                    <div>
                      <h3 className="quicksearch-name">Quick Search</h3>
                      <Input
                        name="ticker"
                        placeholder="Search Here"
                        value={this.state.ticker}
                        onChange={this.handleFormInput}
                      />
                      <FormBtn
                        onClick={this.handleFormSubmit}
                      >Search Stock
                      </FormBtn>
                    </div>
                ) : (
                  <div className="row">
                    <Stockname
                      companyName={this.state.companyName}
                      website={this.state.website}
                      companyLogo={this.state.logo}
                      postFavorite={this.postFavorite}
                    />
                    <Chart
                    chartData={this.state.chartData}
                    company={this.state.companyName}
                    legendPosition="bottom"
                    />
                    <Quotes
                      price={this.state.price}
                      standardPE={this.state.standardPE}
                      high={this.state.dayHigh}
                      low={this.state.dayLow}
                      change={this.state.priceChange}
                      marketCap={this.state.marketCap}
                      volume={this.state.volume}
                      yearHigh={this.state.yearHigh}
                      yearLow={this.state.yearLow}
                    />
                    <Companyinfo
                      sector={this.state.sector}
                      exchange={this.state.exchange}
                      description={this.state.description}
                      industry={this.state.industry}
                    />
                    <Companynews
                      companyNews={this.state.companyNews}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
      </div>
    );
  }
}

export default Stocks;


// 'rgba(54, 162, 235, 0.6)',
// 'rgba(255, 206, 86, 0.6)',
// 'rgba(75, 192, 192, 0.6)',
// 'rgba(153, 102, 255, 0.6)',
// 'rgba(255, 159, 64, 0.6)',
// 'rgba(255, 99, 132, 0.6)',
// 'rgba(255, 99, 132, 0.6)',
// 'rgba(54, 162, 235, 0.6)',
// 'rgba(255, 206, 86, 0.6)',
// 'rgba(75, 192, 192, 0.6)',
// 'rgba(153, 102, 255, 0.6)',
// 'rgba(255, 159, 64, 0.6)',
// 'rgba(255, 99, 132, 0.6)',
// 'rgba(255, 99, 132, 0.6)',
// 'rgba(54, 162, 235, 0.6)',
// 'rgba(255, 206, 86, 0.6)',
// 'rgba(75, 192, 192, 0.6)',
// 'rgba(153, 102, 255, 0.6)',
// 'rgba(255, 159, 64, 0.6)',
// 'rgba(255, 99, 132, 0.6)',
// 'rgba(255, 99, 132, 0.6)',
// 'rgba(54, 162, 235, 0.6)',
// 'rgba(255, 206, 86, 0.6)',
// 'rgba(75, 192, 192, 0.6)'
