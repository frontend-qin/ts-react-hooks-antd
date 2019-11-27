import React from 'react'
import './index.less'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router'

interface FormTypes extends RouteComponentProps {
  form: any
}

const Login = (props: FormTypes) => {
  const { getFieldDecorator } = props.form
  // react 对表单事件的 约束接口 类型约束
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    props.form.validateFields((err: boolean, values: any) => {
      if (!err) {
        props.history.push('/home')
      }
    })
  }
  return (
    <div className='login'>
      <div className='left_bg'>
        <h1>激情奋斗团</h1>
      </div>
      <div className='login_container'>
        <Form onSubmit={handleSubmit} className='login_form'>
          <h1>BITE交易管理平台</h1>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入账号' }]
            })(
              <Input
                size='large'
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='账号'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }]
            })(
              <Input
                size='large'
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type='password'
                placeholder='密码'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>记住账号</Checkbox>)}
            <Button
              type='danger'
              htmlType='submit'
              block
              size='large'
              className='login-form-button'
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
const LoginApp: any = Form.create()(Login)

export default withRouter(LoginApp)
