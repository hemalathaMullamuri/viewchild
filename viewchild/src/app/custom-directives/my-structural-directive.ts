import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[hideThisElement]'})
export class MyStructuralDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set hideThisElement(isHidden: boolean) {
    if (!isHidden) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (isHidden) {
      this.viewContainer.clear();
    }
  }
}
