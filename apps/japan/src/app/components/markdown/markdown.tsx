import React from 'react';
import parse from 'html-react-parser';
import { MARKDOWN, IMarkDown } from './markdown.model';

export function MarkDown({ data }: { data: string }) {
  if (_hasTags(data)) data = _getFormattedText(data);
  return <React.Fragment>{parse(data)}</React.Fragment>;
}
/* This function is used to replace the custom tags
 * @return Formatted Text
 */
function _getFormattedText(content: string) {
  let _markdowns = MARKDOWN;
  let data: string = '';
  for (const classObj of _markdowns) {
    if (content.match('!!(' + classObj.name + ')!!') !== null) {
      const separator = '!!';
      const regext = classObj.singleTag
        ? separator + classObj.name + separator
        : separator + classObj.name + separator + '(.*?)' + separator + '/' + classObj.name + separator;
      data = _replaceTags(content, regext, classObj || {});
      content = data;
    }
    if (!_hasTags(content)) {
      break;
    }
  }
  return data;
}

/**
 * Replaces the content with respective html tags
 * @param content The string containing html tags
 * @param regext Regex for getting the data in between the custom tags
 * @param classObj contains tag details
 * @returns replaces content with html tags
 */
function _replaceTags(content: string, regext: string, classObj: IMarkDown) {
  const startTag = classObj.startTag;
  if (classObj.properties) {
    return _updateProperties(classObj, startTag, regext, content);
  }
  const replaceTag = classObj.singleTag ? startTag : startTag + '$1' + classObj.endTag;

  return content.replace(new RegExp(regext, 'g'), replaceTag);
}

/**
 * Function to check if any tags are present in content
 * @author Goutham Reddy
 */
function _hasTags(content: string) {
  const regexp = `!!(.*?)!!`;

  return content.match(regexp) !== null;
}

/**
 * Adds properties to tag and removes it from content -- Temporary functionality built to meet requirement
 * @param classObj contains tag details
 * @param startTag starting tag
 * @param regext regular expression
 * @param content content value
 * @returns replaceTags with content
 * @author Goutham Reddy
 */
function _updateProperties(classObj: IMarkDown, startTag: string, regext: string, content: string) {
  let finalContent = content;
  const tempArray = content.match(new RegExp(regext, 'g'));
  if (tempArray != null && tempArray?.length > 0) {
    tempArray.forEach((tag) => {
      // @ts-ignore: Object is possibly 'null'.
      const toReplace = tag.match(new RegExp(`!!${classObj.name}!!(.*?)!!/${classObj.name}!!`))[1];
      let tempToReplace = toReplace;
      if (toReplace.indexOf('https://') !== -1) {
        tempToReplace = toReplace.replace('https://', 'https//');
      }
      if (toReplace.indexOf('mailto:') !== -1) {
        tempToReplace = toReplace.replace('mailto:', 'mailto');
      }
      const values = tempToReplace.split(':');
      let generatedUrl = values[1];
      if (toReplace.indexOf('https://') !== -1) {
        generatedUrl = generatedUrl.replace('https//', 'https://');
      }
      if (toReplace.indexOf('mailto:') !== -1) {
        generatedUrl = generatedUrl.replace('mailto', 'mailto:');
      }
      let updatedTag, replaceTag;
      if (classObj.name == 'image') {
        updatedTag = startTag.replace(`>`, ` src="${generatedUrl}">`);
        //updatedTag = this._openLinkAction(values, updatedTag);
        replaceTag = updatedTag + classObj.endTag;
      } else {
        updatedTag = startTag.replace(`>`, ` href="${generatedUrl}">`);
        updatedTag = _openLinkAction(values, updatedTag);
        replaceTag = updatedTag + values[0] + classObj.endTag;
      }
      finalContent = finalContent.replace(tag, replaceTag);
    });
  }

  return finalContent;
}
/**
 * check if Link needs to be opened in new tab
 * @param values array of strings seperated by :
 * @param updatedTag string to be updated
 * @returns string
 * @author Goutham Reddy
 */
function _openLinkAction(values: string[], updatedTag: string) {
  if (values.length > 2 && values[2] && values[2] === 'newtab') {
    updatedTag = updatedTag.replace(`>`, ` target="_blank">`);
  }

  return updatedTag;
}

export default MarkDown;
