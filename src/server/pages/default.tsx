import * as React from 'react'

export const DefaultPage = () => {
    return <html>
    <head>
        <title>default page</title>
    </head>
    <body>
        <h3></h3>
        <button value="" onClick={() => alert(1)}/>
        <script src="mount.js"></script>
    </body>
    </html>;
};
