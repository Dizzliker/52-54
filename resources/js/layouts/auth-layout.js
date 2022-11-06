const AuthLayout = ({children}) => {
    return (
        <>
            <div className="left-side">
                <span className="left-side__52">52</span>
                <img src="/images/whale.png" className="logo" alt="Whale logo" />
                <span className="left-side__54">54</span>
            </div>
            <div className="right-side">
                {children}
            </div>
        </>
    );
}

export default AuthLayout;