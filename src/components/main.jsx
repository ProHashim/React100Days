
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

                    <li>
                        <details>
                            <summary><h3 className="titles"> Objects Methods</h3></summary>
                            <p>
                                Methods are actions that can be performed on objects
                            </p>
                        </details>

                    </li>
                    <li>
                        <details>
                            <summary><h3 className="titles"> Array Methods</h3></summary>
                            <p>
                                <img src="images/arrayMethods.png" alt="" style={{ width: "400px" }} />
                                <p>There are a lot more see them yourself <a href="https://www.w3schools.com/js/js_array_methods.asp" target="_blank" rel="noreferrer"> here </a></p>
                            </p>
                        </details>

                    </li>

                    <li>
                        <details>
                            <summary><h3 className="titles">Event Loop</h3></summary>
                            <p>
                                JS is a single threaded programming language means it can run one task at a time.
                                Call stack is a data structure which records where in the program we are :D
                                Stack Blowing <em> calling the function which calls itself</em>
                                Blocking the code, code execution being slow.
                                <em>
                                    <mark> The event loop job is to look at the stack and look at  the task queue. If
                                        the stack is empty it takes the first thing on the queue and pushes it to the call stack </mark>
                                </em>
                                <img src="images/event-loop.png" alt="" style={{ width: "300px" }} />
                                <img src="images/event-loop2.png" alt="" style={{ width: "300px" }} />
                            </p>
                        </details>

                    </li>

                    <li>
                        <details>
                            <summary><h3 className="titles">Memoization</h3></summary>
                            <p>
                                A technique in JS/ programming which attempts to increase
                                a function's performance by caching its previosly computed results
                            </p>
                        </details>

                    </li>
                </ul>
                <hr class="css-hr" />

                {/* Righ hand side of the page */}
                <ul className="pre-req-right">
                    <li>
                        <details>
                            <summary><h3 className="titles">scopes and closures</h3></summary>
                            <p> <ul>
                                <li> Scopes: A scope in JavaScript defines what variables you have access to.
                                    There are two kinds of scope – global scope and local scope.</li>
                                <li>Closures: Whenever you create a function within another function, you have created a closure.The inner function is the closure.
                                    This closure is usually returned so you can use the outer function’s variables at a later time.</li>
                            </ul> </p>
                        </details>

                    </li>
                    <li>
                        <details>
                            <summary><h3 className="titles">this 😕 </h3></summary>
                            <p>
                                The JavaScript this keyword refers to the object it belongs to.🙋
                                <p>It has different values depending on where it is used: </p>
                                <ul class="definition-list">
                                    <li>In a method, <code class="code">this</code> refers to the <b>owner object</b>.</li>
                                    <li>Alone, <code class="code">this</code> refers to the <b>global object</b>.</li>
                                    <li>In a function, <code class="code">this</code> refers to the <b>global object</b>.</li>
                                    <li>In a function, in strict mode, <code class="code">this</code> is <code class="code">undefined</code>.</li>
                                    <li>In an event, <code class="code">this</code> refers to the <b>element</b> that received the event.</li>
                                    <li>Methods like <code class="code">call()</code>, and <code class="code">apply()</code> can refer <code class="code">this</code> to <b>any object</b>.</li>
                                </ul>
                            </p>
                        </details>

                    </li>
                    <li>
                        <details>
                            <summary><h3 className="titles"> Prototypical Inheritance and ES6 Class </h3></summary>
                            <p>
                                At its most basic level, the class keyword in ES6 is equivalent to a constructor function definition that conforms to prototype-based inheritance. It may seem redundant that a new keyword was introduced to wrap an already existing feature but it leads to
                                readable code and lays the foundation upon which future object oriented features can be built.😉 Read more <a href="https://scotch.io/tutorials/demystifying-es6-classes-and-prototypal-inheritance">here</a>
                            </p>
                        </details>

                    </li>

                    <li>
                        <details>
                            <summary><h3 className="titles"> Functional Programming VS OOP </h3></summary>
                            <p>
                                <ul>
                                    <li>
                                        <em>Functional programming (FP)</em> is one of the oldest kinds of programming, maybe even the oldest.
                                        It defines a process of building software that relies exclusively on functions
                                    </li>
                                    <li>In <em>OOP</em> , developers model software applications as collections of objects that can communicate with one another. The interface of each object is a class,
                                        a template that indicates functions and values are accessible to any instance.</li>
                                </ul>
                            </p>
                        </details>

                    </li>
                    <li>
                        <details>
                            <summary><h3 className="titles"> Async JS </h3></summary>
                            <p>
                                <a href="https://youtu.be/SrNQS8J67zc"> Here</a> is the video to watch for Async JS
                            </p>
                        </details>

                    </li>

                    <li>
                        <details>
                            <summary><h3 className="titles"> Hoisting </h3></summary>
                            <p>
                                Hoisting is JS default behaviour of moving
                                all declaration to the top of current scope
                                Only declaration is hosted and not initialization.
                                <h4>Example:</h4>

                                <span className="code-container">
                                    <code>
                                        var x = 5
                                        alert("x is =" + "and y is " + y)
                                        let y = 7
                                    </code>
                                </span>


                            </p>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary><h3 className="titles"> Hoisting </h3></summary>
                            <p>



                            </p>
                        </details>
                    </li>
                </ul>


            </div>

        </main>
    )
}

export default Main