import { ModelInit, MutableModel, __modelMeta__, CompositeIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerFile = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<File, ['id', 'userID', 'fileName']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly fileName: string;
  readonly fileSize: string;
  readonly fileType: string;
  readonly description: string;
  readonly dateCreated: string;
  readonly dateModified: string;
  readonly s3Location: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFile = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<File, ['id', 'userID', 'fileName']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly fileName: string;
  readonly fileSize: string;
  readonly fileType: string;
  readonly description: string;
  readonly dateCreated: string;
  readonly dateModified: string;
  readonly s3Location: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type File = LazyLoading extends LazyLoadingDisabled ? EagerFile : LazyFile

export declare const File: (new (init: ModelInit<File>) => File) & {
  copyOf(source: File, mutator: (draft: MutableModel<File>) => MutableModel<File> | void): File;
}