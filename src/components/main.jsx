
const Main = () => {
    let name = {
        firstName: "Hello, ",
        lastName: "",

    }
    let fullName = function (location) {
        return <p> {this.firstName + this.lastName + "  " + location} </p>
    }

    let name2 = {
        firstName: "Hello ",
        lastName: "Hashim Name 2",
    }

    // Bind gives the copy of that function that can be invoked later
    let myfullname = fullName.bind(name2, "Munich")


    return (
        <main>
            <div className="content">

                <ul className="pre-req-left">
                    <li>
                        <details>
                            <summary><h3 className="titles">Functions are first-class citizens in JavaScript</h3></summary>
                            <p> This means functions are treated like any other first-class object — they can be stored in variables, passed around,
                                returned from other functions, and even hold their own properties. We as programmer, now can take advantage of design patterns
                                higher Order Functiom and call-backs. </p>
                        </details>

                    </li>
                    <li>
                        <details>
                            <summary><h3 className="titles">bind(), apply(), and call()</h3></summary>
                            <p>
                                {fullName.call(name, "call()  attaches this into function and executes the function immediately")}
                                {fullName.call(name2, "apply() is similar to call except that it takes an array-like object instead of listing the arguments out one at a time. ")}
                                {fullName.apply(name2, ["Bind returns a new function, allowing you to pass in a this array and any number of arguments. Use bind() when you want that function to be later executed, useful in events"])}
                                {myfullname()}
                            </p>
                        </details>

                    </li>
                </ul>
                <ul className="pre-req-right">
                    <li>
                        <details>
                            <summary><h3 className="titles">scopes and closures</h3></summary>
                            <p> <ul>
                                <li> Scopes: A scope in JavaScript defines what variables you have access to.
                                    There are two kinds of scope – global scope and local scope.</li>
                                <li>Closures: Whenever you create a function within another function, you have created a closure. The inner function is the closure.
                                    This closure is usually returned so you can use the outer function’s variables at a later time.</li>
                            </ul> </p>
                        </details>

                    </li>
                    <li>
                        <details>
                            <summary><h3 className="titles">bind(), apply(), and call()</h3></summary>
                            <p>
                                {fullName.call(name, "Isb")}
                                {fullName.call(name2, "Hamburg")}
                                {fullName.apply(name2, ["Frankfurt"])}
                                {myfullname()}
                            </p>
                        </details>

                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Main