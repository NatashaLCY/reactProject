import { Route, useNavigate } from 'react-router-dom';
export default function PrivateRoute({ component: Component, ...rest }) {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const navigate = useNavigate();
    return( 
        <Route
            {...rest}
            element={
                token ?(
                    <Component/> //如果有token就渲染Component
                ):(
                    navigate('/login') //如果沒有token就導向login頁面
                )
            }
        />
        // <Route 
        //     {...rest} 
        //     render={(props) => (
        //         token ? 
        //         (
        //             <Component {...props} />
        //         ) : (
        //             <Redirect to="/login" />
        //         )
        //     )} 
        // />
    );
}