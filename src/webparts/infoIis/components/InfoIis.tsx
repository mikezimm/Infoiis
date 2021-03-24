import * as React from 'react';
import styles from './InfoIis.module.scss';
import { IInfoIisProps } from './IInfoIisProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { getEmbedInfo } from '../../../services/EmbedServices';

export default class InfoIis extends React.Component<IInfoIisProps, {}> {

  public render(): React.ReactElement<IInfoIisProps> {

    getEmbedInfo( this.props.wpContext, 'https://www.youtube.com/watch?v=9ezOXbnW5og&list=PLq0hqOjHwRg1pIJHXjxvnJRnStFroMG_a&index=6');

    return (
      <div className={ styles.infoIis }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
