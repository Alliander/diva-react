import React, { Component } from 'react';

import RequestAttributeDisclosure from './containers/RequestAttributeDisclosure/RequestAttributeDisclosure';


function extractAttributeIds(attributes) {
  return attributes.map(el => el.id);
}

/**
 * React middleware function that renders based on available and required attributes.
 * @param {object} attributes - a key value object containing available attributes
 * @param {array} requiredAttributes - an array containing required attributes with their label
 * @returns {Component}
 */
export default function withDivaAuthorization(attributes = {}, requiredAttributes = [], viewId = 'diva-auth') {
  return (WrappedComponent) => {
    class WithAuthorization extends Component {
      hasRequiredAttributes = () => {
        const existingAttributes = extractAttributeIds(attributes);
        return requiredAttributes.reduce(
          (accumulator, requiredAttribute) =>
            accumulator && requiredAttribute.attributes.some(el => existingAttributes.includes(el)),
          true,
        );
      }

      render() {
        if (this.hasRequiredAttributes(attributes, requiredAttributes)) {
          return <WrappedComponent />;
        }
        return (
          <RequestAttributeDisclosure viewId={viewId} requiredAttributes={requiredAttributes} />
        );
      }
    }
    return WithAuthorization;
  };
}
