import Nav from '../components/Home'

const IndexPage = ({data}) => (
  <>
    <Nav data={data} />
    <p>Hello, I'm the index page</p>
  </>
)
// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(
		`https://mocki.io/v1/d618aba9-d412-4289-be41-84fd5253879e`
	);
	console.log(res);
	const data = await res.json();

	// Pass data to the page via props
	console.log(data);
	return { props: { data } };
}

export default IndexPage
