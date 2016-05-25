declare module "escodegen" {

    interface Generator{
        generate(obj:esprima.Syntax.Node):string;
        getDefaultOptions():any
    }

    var x:Generator;

    export=x;
}
