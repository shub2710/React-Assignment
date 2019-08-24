import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head >
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin/>
         <link  rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
               integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
               crossorigin="anonymous"
        />
        <link  rel="stylesheet" href="static/css/carousel.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.6/holder.js" />
        <style global jsx>{`
           
      .content {
        max-width: 350px;
        margin: auto;
        background: white;
        padding: 10px;
      }
      .finish {
          padding : 20px;
      }
      .section1 {
        white-space: nowrap;
      }
      .slides{
        display: inline-block;
      }
      .selectSlide  {
            color : #007bff;
            display: inline-block;
        }
      .numberToText{
        margin-bottom: 31px;
         color:#fff;
         padding : 7px;
      }
      `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body> 
      </Html>
    )
  }
}

export default MyDocument