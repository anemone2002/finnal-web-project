import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div >
     <Header/>
     <div class="row">
    			<div class="col-lg-9">
    				<form class="action text-center">
    					<div class="form-row">
    						<div class="col-lg-6">
    							<input type=""class="form-control bg-light mb-3"placeholder="Name" name="">
    						</div>
    						<div class="col-lg-6">
    							<input type=""class="form-control bg-light mb-3"placeholder="Name" name="">
    						</div>
    					</div>
    					<div class="form-row">
    						<div class="col-lg-12">
    							<textarea class="form-control bg-light mb-3" placeholder="Message"cols="30" rows="10"></textarea>
    						</div>
    					</div>
    					<button type="button" class="btn btn-success">Submit</button>
    				</form>
    			</div>
    		</div>

     < Footer/>
    </div>
  );
}

export default App;
