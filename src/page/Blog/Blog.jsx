

const Blog = () => {
    return (
        <div className="my-12 w-3/4 mx-auto">
            <h2 className="text-4xl font-bold text-center p-4">Blog Section</h2>
            <div className="border my-4">An access token is a little piece of code that contains a large amount of data. user information, permissions, groups are embedded within one token that passes from a server to a user device <br /> The main purpose of using a refresh token is to considerably shorten the life of an access token. The refresh token can then later be used to authenticate the user as and when required by the application without running into problems such as cookies being blocked</div>
            <div  className="border my-4">
                SQL databases define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. <br />
                A NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways
            </div>
            <div className="border my-4">
                Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, and hybrid web application. Its a layer built on the top of the Node js that helps manage servers and routes. <br />
                Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
            </div>
            <div  className="border my-4">
                When working with data in MongoDB, you may quickly have to run complex operations, with multiple stages of operations to gather metrics for your project.

                Generating reports and displaying useful metadata are just two major use cases where MongoDB aggregation operations can prove incredibly useful, powerful, and flexible.
            </div>
        </div>
    );
};

export default Blog;