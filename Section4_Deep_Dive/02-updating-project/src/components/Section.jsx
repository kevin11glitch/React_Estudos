export default function Section({ title, children, ...props }){
    return(
        <section {...props} /*ln 3 title="Examples" id="examples"*/> 
            <h2>{title}</h2>
            {children}
        </section>
    )
}

