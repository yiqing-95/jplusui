/** * @author  xuld */imports("Controls.Form.TextBox");using("Controls.Core.Base");using("Controls.Core.IInput");var TextBox = Control.extend(IInput).implement({		xtype: 'textbox',		tpl: '<input type="text" class="x-control">'	});