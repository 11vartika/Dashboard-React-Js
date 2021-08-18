const { Router } = require("@material-ui/icons");
const { Switch } = require("react-router");

const pages=[
 {
exact : true,
path:"/login",
component: Login,
layout:PublicLayout,
 },

 {
    exact : false,
    path:"/dashboard",
    component:Home,
    layout:AuthLayout,
     }
];

const App = () =>{
    return (
        <Router history ={history}>
            <Switch>
                {pages.map((i,index)=>{
                    <Route Key = {index}
                    exact = {i.exact}
                    path={i.path}
                    render = {props =>(
                        <Layout history={props.history}>
                            <Comment {...props}/>
                        </Layout>
                    )}       
                    />                                 
                })}
            </Switch>
        </Router>
    )
}