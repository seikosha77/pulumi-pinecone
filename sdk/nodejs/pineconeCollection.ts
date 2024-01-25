// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PineconeCollection extends pulumi.CustomResource {
    /**
     * Get an existing PineconeCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PineconeCollection {
        return new PineconeCollection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pinecone:index:PineconeCollection';

    /**
     * Returns true if the given object is an instance of PineconeCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PineconeCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PineconeCollection.__pulumiType;
    }

    /**
     * The dimension of the vectors stored in each record held in the collection.
     */
    public /*out*/ readonly dimension!: pulumi.Output<number>;
    /**
     * The environment where the collection is hosted.
     */
    public /*out*/ readonly environment!: pulumi.Output<string>;
    /**
     * The name of the collection to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The size of the collection in bytes.
     */
    public /*out*/ readonly size!: pulumi.Output<number>;
    /**
     * The name of the index to be used as the source for the collection.
     */
    public readonly source!: pulumi.Output<string>;
    /**
     * The number of records stored in the collection.
     */
    public /*out*/ readonly vectorCount!: pulumi.Output<number>;

    /**
     * Create a PineconeCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PineconeCollectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["dimension"] = undefined /*out*/;
            resourceInputs["environment"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["vectorCount"] = undefined /*out*/;
        } else {
            resourceInputs["dimension"] = undefined /*out*/;
            resourceInputs["environment"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["vectorCount"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PineconeCollection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PineconeCollection resource.
 */
export interface PineconeCollectionArgs {
    /**
     * The name of the collection to be created.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the index to be used as the source for the collection.
     */
    source: pulumi.Input<string>;
}
